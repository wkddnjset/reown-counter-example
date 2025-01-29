import { yupResolver } from '@hookform/resolvers/yup'

import { FieldValues, UseFormProps, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { HELPER_TEXT } from '@/constants/form/helper-text'
import { REGEX } from '@/constants/form/regex'

export interface ExampleFormDataType extends FieldValues {
  // 필수 필드
  id: string
  password: string
  passwordConfirm: string
  nickname: string

  // 선택적 필드
  email?: string
  phone?: string
  birthdate?: string
  emailVerificationCode?: string
  phoneVerificationCode?: string

  // 선택적 필드이며, 최소 글자를 요구
  postcode?: string | null

  // 선택적 필드
  addressMain?: string
  addressDetail?: string
  city?: string
  region?: string

  // 선택적 필드이며, 최소 글자를 요구
  username?: string | null
  firstName?: string | null
  lastName?: string | null
}

export type ExampleFormKeys = keyof ExampleFormDataType

/**
 * yup을 이용하여 form의 유효성 검사를 처리합니다.
 * react-hook-form과 yup을 연결해주는 yupResolver를 함께 사용합니다.
 *
 * 반복적인 validation 값은 상수로 관리되며, 각 필드의 조건에 따라 yup의 메서드를 활용하여 정의합니다.
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 */
export const exampleFormSchema = yup.object().shape({
  /** @name 아이디 */
  id: yup
    .string()
    .required(HELPER_TEXT['REQUIRED_INPUT']) // 필수 입력
    .test(
      HELPER_TEXT['ID'].SPECIAL_CHARACTER, // 특수 문자 제한
      HELPER_TEXT['ID'].SPECIAL_CHARACTER,
      (value) => !REGEX['SPECIAL_CHARACTER'].test(value || ''),
    )
    .matches(REGEX['ID'], HELPER_TEXT['ID'].COMMON), // 정규식 매칭

  /** @name 비밀번호 */
  password: yup
    .string()
    .required(HELPER_TEXT['REQUIRED_INPUT']) // 필수 입력
    .matches(REGEX['PASSWORD'], HELPER_TEXT['PASSWORD']), // 정규식 매칭

  /** @name 비밀번호 확인 */
  passwordConfirm: yup
    .string()
    .required(HELPER_TEXT['REQUIRED_INPUT']) // 필수 입력
    .oneOf([yup.ref('password')], HELPER_TEXT['PASSWORD_CONFIRM']), // 비밀번호와 일치 여부 확인

  /** @name 닉네임 */
  nickname: yup
    .string()
    .required(HELPER_TEXT['REQUIRED_INPUT']) // 필수 입력
    .min(2, HELPER_TEXT['NICKNAME'].MIN) // 최소 2글자
    .max(10, HELPER_TEXT['NICKNAME'].MAX) // 최대 10글자
    .test(
      HELPER_TEXT['NICKNAME'].SPECIAL_CHARACTER, // 특수 문자 제한
      HELPER_TEXT['NICKNAME'].SPECIAL_CHARACTER,
      (value) => !REGEX['SPECIAL_CHARACTER'].test(value || ''),
    )
    .matches(REGEX['NICKNAME'], HELPER_TEXT['NICKNAME'].COMMON), // 정규식 매칭

  /**
   * @name 이메일
   * @description 정규식 매칭을 수행하며, 빈 값은 허용
   * @excludeEmptyString 정규식 조건에서 빈값은 제외한 후 검사합니다. 선택적 값이며, 입력시에 특정 정규식이 필요한 경우 사용합니다.
   */
  email: yup.string().matches(REGEX['EMAIL'], {
    excludeEmptyString: true,
    message: HELPER_TEXT['EMAIL'],
  }),

  /** @name 이메일_인증번호 */
  emailVerificationCode: yup.string(),

  /**
   * @name 핸드폰 번호
   * @description 정규식 매칭을 수행하며, 빈 값은 허용
   * @excludeEmptyString 정규식 조건에서 빈값은 제외한 후 검사합니다. 선택적 값이며, 입력시에 특정 정규식이 필요한 경우 사용합니다.
   *
   */
  phone: yup.string().matches(REGEX['PHONE'], {
    excludeEmptyString: true,
    message: HELPER_TEXT['PHONE'],
  }),

  /** @name 핸드폰_인증번호 */
  phoneVerificationCode: yup.string(),

  /**
   * @name 생년월일
   * @description 정규식 매칭을 수행하며, 빈 값은 허용
   * @excludeEmptyString 정규식 조건에서 빈값은 제외한 후 검사합니다. 선택적 값이며, 입력시에 특정 정규식이 필요한 경우 사용합니다.
   *
   */
  birthdate: yup.string().matches(REGEX['BIRTHDATE'].DETAIL_FORMAT, {
    excludeEmptyString: true,
    message: HELPER_TEXT['BIRTHDATE'].DETAIL_FORMAT,
  }),

  /**
   * @name 우편번호
   * @description optional 필드이며, 입력 시 최소 및 최대 길이를 요구. 빈 값은 null 처리하여 허용
   * @notRequired T | undefined | null를 반환합니다. 최소 글자가 필요하지만, optional를 요구하는 값일 경우 사용합니다.
   *  transform으로 빈 값으로 null을 반환하여(빈 값을 Null처리) 유효성이 통과되게 합니다.
   */
  postcode: yup
    .string()
    .notRequired()
    .transform((value) => value || null) // 빈 값일 경우 null로 변환
    .min(4, HELPER_TEXT['POSTCODE']) // 최소 4글자
    .max(20, HELPER_TEXT['POSTCODE']) // 최대 20글자
    .matches(REGEX['POSTCODE'].COMMON, {
      excludeEmptyString: true,
      message: HELPER_TEXT['POSTCODE'],
    }),

  /**
   * @name 기본 주소
   * @description optional 필드로, 최대 100자까지 입력 가능
   * @optional undefined을 허용하며 생략 가능합니다.
   */
  addressMain: yup
    .string()
    .optional()
    .max(100, HELPER_TEXT['ADDRESS_MAIN'].MAX),

  /**
   * @name 상세 주소
   * @description optional 필드로, 최대 100자까지 입력 가능
   * optional 메서드를 생략했습니다. 위의 `addressMain`과 같은 타입을 가집니다.
   *
   */
  addressDetail: yup.string().max(100, HELPER_TEXT['ADDRESS_DETAIL'].MAX),

  /** @name 도시 */
  city: yup.string().max(100, HELPER_TEXT['CITY'].MAX),

  /** @name 주/지역 */
  region: yup.string().max(50, HELPER_TEXT['REGION'].MAX),

  /**
   * @name 사용자 이름 (username)
   * @description optional 필드로, 최소 2글자, 최대 20글자 입력 가능
   * 빈 값은 null 처리
   * @notRequired T | undefined | null를 반환합니다. 최소 글자가 필요하지만, optional를 요구하는 값일 경우 사용합니다.
   *  transform으로 빈 값으로 null을 반환하여(빈 값을 Null처리) 유효성이 통과되게 합니다.
   */
  username: yup
    .string()
    .notRequired()
    .transform((value) => value || null) // 빈 값은 null로 처리
    .min(2, HELPER_TEXT['USERNAME'].MIN)
    .max(20, HELPER_TEXT['USERNAME'].MAX)
    .test(
      HELPER_TEXT['USERNAME'].SPECIAL_CHARACTER, // 특수 문자 제한
      HELPER_TEXT['USERNAME'].SPECIAL_CHARACTER,
      (value) => !REGEX['SPECIAL_CHARACTER'].test(value || ''),
    )
    .matches(REGEX['USERNAME'], HELPER_TEXT['USERNAME'].COMMON),

  /**
   * @name 이름 (first name)
   * @description optional 필드로, 최소 2글자, 최대 20글자 입력 가능
   * 빈 값은 null 처리
   * @notRequired T | undefined | null를 반환합니다. 최소 글자가 필요하지만, optional를 요구하는 값일 경우 사용합니다.
   *  transform으로 빈 값으로 null을 반환하여(빈 값을 Null처리) 유효성이 통과되게 합니다.
   */
  firstName: yup
    .string()
    .notRequired()
    .transform((value) => value || null) // 빈 값은 null로 처리
    .min(2, HELPER_TEXT['USERNAME'].MIN)
    .max(20, HELPER_TEXT['USERNAME'].MAX)
    .test(
      'has-special-character', // 특수 문자 제한
      HELPER_TEXT['USERNAME'].SPECIAL_CHARACTER,
      (value) => !REGEX['SPECIAL_CHARACTER'].test(value || ''),
    )
    .matches(REGEX['USERNAME'], HELPER_TEXT['USERNAME'].COMMON),

  /**
   * @name 성 (last name)
   * @description optional 필드로, 최소 2글자, 최대 20글자 입력 가능
   * 빈 값은 null 처리
   * @notRequired T | undefined | null를 반환합니다. 최소 글자가 필요하지만, optional를 요구하는 값일 경우 사용합니다.
   *  transform으로 빈 값으로 null을 반환하여(빈 값을 Null처리) 유효성이 통과되게 합니다.
   */
  lastName: yup
    .string()
    .notRequired()
    .transform((value) => value || null) // 빈 값은 null로 처리
    .min(2, HELPER_TEXT['USERNAME'].MIN)
    .max(20, HELPER_TEXT['USERNAME'].MAX)
    .test(
      'has-special-character', // 특수 문자 제한
      HELPER_TEXT['USERNAME'].SPECIAL_CHARACTER,
      (value) => !REGEX['SPECIAL_CHARACTER'].test(value || ''),
    )
    .matches(REGEX['USERNAME'], HELPER_TEXT['USERNAME'].COMMON),
})

/**
 * useForm hook을 사용하여 form의 상태 관리 및 유효성 검사를 처리하는 함수입니다.
 */
export const useExampleForm = (options?: UseFormProps<ExampleFormDataType>) => {
  return useForm<ExampleFormDataType>({
    resolver: yupResolver(exampleFormSchema), // yup 스키마와 연결
    mode: 'onChange',
    ...options,
  })
}
