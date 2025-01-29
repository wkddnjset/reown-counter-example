# @toktokhan-dev/next-page-init

## 0.0.18

### Patch Changes

- [`c5edb60`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/c5edb60a7e31f79423f6e6239baa392caaf25d7d) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - @toktokhan-dev 패키지 버전 ^ 추가
  이후 버전관리는 시멘틱 버저닝에 맞게 업데이트 할 예정입니다.

## 0.0.17

### Patch Changes

- [`e19bcf0`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/e19bcf0e5a29c4feff30e117398c55e5006eb966) Thanks [@ldu1020](https://github.com/ldu1020)! - remove os in 'package.json'

## 0.0.16

### Patch Changes

- [`b4836b1`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/b4836b1b3f51dd4dc9c7f9bbfcb6e09990fd6e5f) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - - favicon image 경로 수정

- [`30c8958`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/30c89589622848adfdda679f727d1eaa550b2471) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - - use-hook-form + yup 사용 예제가 추가되었습니다.

  - hook form 경로 src/hooks/useExampleForm.ts
  - 상수 경로
    - 상수는 서지우님의 gen-yup plugin 개발시 디자이너와 상의 후 결정된 정규식, 문구로 지정하였습니다. (Thanks [@Panxoat](https://github.com/Panxoat)!)
    - src/constants/form/regex.ts
    - src/constants/form/helper-text.ts
  - 예제 컴포넌트
    - TokGide Form Tab (src/components/@Drawer/TokGuideDrawer/components/contents/Form/Form.tsx)

- [`99c187f`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/99c187fe4fc7589dd63645c36af053940c934ccc) Thanks [@ldu1020](https://github.com/ldu1020)! - color theme

  color theme 에 원시값이 포함되지 않는 버그와 default 값이 함께 잡히는 버그가 수정되었습니다.

- [`3334038`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/33340384e97c8ddfa7e60f08207da8ee853a56f1) Thanks [@ldu1020](https://github.com/ldu1020)! - add hoc 'withProps'

- [`b4c320f`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/b4c320f5ba2d45180b3308e9050d22851dca4fa7) Thanks [@ldu1020](https://github.com/ldu1020)! - button theme

  - left, right icon 에 대한 디자인 case 가 추가되었습니다.

- [`b2d4a2b`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/b2d4a2b5593b644ce6e84af0cc1dc9f49c229e9f) Thanks [@ldu1020](https://github.com/ldu1020)! - add tokript plugin gen:source

- [`4ca15f0`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/4ca15f0b69d701b3eca4068e667e9137f2d6726f) Thanks [@ldu1020](https://github.com/ldu1020)! - update gen:theme version

- [#31](https://github.com/TOKTOKHAN-DEV/next-page-init/pull/31) [`8af9316`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/8af93165f641a66c40641a743ca5685d3cebc6e5) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - Google(ga), Kakao(kakaoSetter), Facebook(fbq) 분석도구 모듈를 추가하였습니다.
  필요시 src/pages/\_document.tsx 파일에서 필요한 setter함수를 주석 해제 해주시고, 이에 따라 요구되는 메서드들은
  src/utils/analytics/analytics.ts 에서 주석을 해제해주세요.

  구글은 기본적으로 추적되는 이벤트가 있습니다. 디테일 한 이벤트 추가시 메서드를 추가해 사용해주시면 됩니다.

  # 사용 경로

  ## src/pages/\_document.tsx

  ```ts
  ...
    render() {
      return (
        <Html>
          <Head>
            ...
            {/* 분석도구가 필요한 경우 주석 해제 후 사용해주세요. src/utils/analytics/analytics.ts 설정 필요 */}
            {/* {GASetter()}
            {KakaoSetter()}
            {FacebookSetter()} */}
          </Head>
          <body>
            ...
          </body>
        </Html>
      )
    }
  ...
  ```

  ## src/utils/analytics/analytics.ts

  ```ts
  **
   * 필요하지 않은 분석 도구는 해당 파일에서 꼭 제거해주세요.
   * 단일 분석 도구만 사용할 경우, 해당 도구의 메서드를 직접 호출하여 사용합니다.
   *
   * @example
   * useEffect(() => {
   *  facebookAnalytics?.pageView({ content_name: 'page2', content_ids: [2] });
   * }, [])
   */

  export const googleAnalytics = new GoogleAnalytics(ENV.GA_KEY)
  export const facebookAnalytics = new FacebookAnalytics(ENV.FACEBOOK_PIXEL_KEY)
  export const kakaoAnalytics = new KakaoAnalytics(ENV.KAKAO_PIXEL_KEY)

  /** Google Analytics, Facebook Pixel, Kakao Pixel을 모두 사용하는 경우 아래의 함수를 공통으로 사용할 수 있습니다. */
  export const completeRegistrationAnalytics = (
    params: Analytics.CompleteRegistration,
  ) => {
    googleAnalytics?.completeRegistration(params.Ga)
    facebookAnalytics?.completeRegistration(params.Fbq)
    kakaoAnalytics?.completeRegistration(params.Kakao)
  }

  /** 각 분석 도구의 설정 메서드를 호출하는 함수들입니다.  */
  export const GASetter = () => googleAnalytics?.GASetter()
  export const FacebookSetter = () => facebookAnalytics?.FacebookSetter()
  export const KakaoSetter = () => kakaoAnalytics?.KakaoSetter()
  ```

  # 사용 예제

  ```tsx
  <>
    <Button onClick={() => googleAnalytics.completeRegistration()}>
      회원가입 완료
    </Button>

    <Button
      onClick={() =>
        facebookAnalytics.viewContent({
          content_name: 'Product Page',
          content_ids: [123],
          content_type: 'product',
          currency: 'USD',
          value: 200,
        })
      }
    >
      콘텐츠 조회
    </Button>
  </>
  ```

## 0.0.15

### Patch Changes

- [`a7166ba`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/a7166ba4e950fccc64da57d5fc4dcc72928b3594) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - fix

  - variable font 가중치 (weight)범위를 적용했습니다.
    - safari에서 pretendard variable 로컬폰트 적용 안됨 이슈 수정
  - 제보 및 수정 제안해주신 [@keemtj](https://github.com/keemtj), [@kkwaktae](https://github.com/kkwaktae)님 감사합니다.

## 0.0.14

### Patch Changes

- [#27](https://github.com/TOKTOKHAN-DEV/next-page-init/pull/27) [`bc66946`](https://github.com/TOKTOKHAN-DEV/next-page-init/commit/bc669466655bad78bcd65273ee044b413cd662bd) Thanks [@AlgoRoots](https://github.com/AlgoRoots)! - - theme 추가 및 변경
  - input, button, select, form , form-label, form-error, modal, textarea
  - 삭제
    - spinner, badge, tooltip
  - 기본 컴포넌트 디자인 시스템 적용
    - VerificationInput
    - CommonAlert
    - CommonSelect
  - TokGuide Theme, component preview 추가 및 bookmark 링크 추가
    - useTimer사용한 VerificationInput 에제
    - 기타 Theme components...
  - @toktokhan-dev/\* packages update

## 0.0.13

### Patch Changes

- 37b8694: - 새로운 디자인 시스템이 적용되었습니다.

  - 기본 theming예시는 TOKGUIDE (우측 Drawer 버튼)을 확인해 주세요.
    (TOKGUIDE THEME path src/components/@Drawer/TokGuideDrawer/components/contents/Theme/Theme.tsx)
  - update @chakra-ui/theme-tools

  ```diff
  - "@chakra-ui/theme-tools": "^2.0.18",

  +  "@chakra-ui/theme-tools": "^2.1.2",

  ```

  - next font local font 설정 변경
    - pretendard variable font를 사용함으로서 src에 배열로 넣었던 font설정 값을 경로로 변환했습니다.

  ```diff
  import localFont from 'next/font/local'

  export const Pretendard = localFont({
    src:
  -   [
  -     {
  -       path: '../../../public/fonts/pretendard/PretendardVariable.woff2',
  -       weight: '100',
  -       style: 'normal',
  -     },
  -     {
  -       path: '../../../public/fonts/pretendard/PretendardVariable.woff2',
  -       weight: '200',
  -       style: 'normal',
  - ...
  -   ],

  +   '../../../public/fonts/pretendard/PretendardVariable.woff2',
  })

  ```

  이 밖의 변경사항은 변경사항 코드를 확인해주세요.

## 0.0.12

### Patch Changes

- 916fb5b: ## Context API -> zustand

  - 전역/지역/스토리지 상태 관리 라이브러리가 변경되었습니다.

  Nextjs 와 같은 SSR 환경에선, 서버에서의 상태변경이 일어날 경우 각기 다른 클라이언트에서 서버상태를 공유하게 되는 이슈가 생길 수 있기 때문에, zustand 를 context 와 함께 사용하는 것을 권장합니다.
  [zustand-with-Next.js] https://zustand.docs.pmnd.rs/guides/nextjs

  자세한 예시와 사용법은 템플릿의 TokGuide drawer 의 `state` tab
  또는 [TOKDOCS 문서](https://toktokhan-dev-docs.vercel.app/docs/zustand/overview) 를 참고해주세요.

  TokGuide example path: src/components/@Drawer/TokGuideDrawer/components/contents/State/State.tsx

## 0.0.11

### Patch Changes

- 64d69d0: ### 업데이트 내용

  - `@toktokhan-dev/*` 패키지가 업데이트되었습니다.
  - `tok-cli-config.ts` 타입 미적용 이슈가 수정되었습니다.
  - `@toktokhan-dev/node` 패키지 업데이트로 `gen:img`의 `basePath`가 `/image`로 적용되었습니다.
  - 불필요한 아이콘 SVG 파일들이 삭제되었습니다.
  - `@toktokhan-dev/cli-plugin-gen-icon-chakra` 패키지 업데이트로 이제 SVG 컴포넌트의 `fill` 속성이 `Icon` 컴포넌트로 적용됩니다.

- f00c6e5: # CLI 폰트 테마 수정

  똑똑한 개발자가 주로 사용하는 'Pretendard Variable' 폰트를 키값으로 등록했습니다. Next.js 폰트를 적용할 때 변수를 사용해 'Pretendard Variable'이라는 fontFamily를 등록할 수 없어서 추가적으로 테마에 지정해주었습니다.

  기본 fontFamily를 지정할 때 기존에는 `style.ts`의 body와 heading 컴포넌트를 따로 테마 설정하는 과정이 필요했으나, 이제 모든 기본 폰트 설정이 `src/configs/theme/foundations/typography/fonts/index.ts` 경로에 통합되었습니다. 앞으로는 기본 폰트를 지정할 때 해당 경로에서 지정해주시면 됩니다.

## 0.0.10

### Patch Changes

- 31fd45c: s2 오타 및 타입에러 수정
- 962b21a: - @toktokhan-dev/\* 패키지 업데이트
  - cli chakra , cli update
  - tokenMode default 적용
  - theme.json 변경
- ca3b468: 똑똑한 개발자 > 똑똑한개발자

## 0.0.9

### Patch Changes

- 6b86764: - toktokhan-dev config 경로를 업데이트 했습니다. 파일링크를 통해 config 설정을 확인하실 수 있습니다.
  - @toktokhan-dev/\* 패키지를 업데이트 하였습니다.
  - retry 함수의 onRefetch 에서 instance.request(reqData)를 return 하지 않는 이슈를 수정했습니다.

## 0.0.8

### Patch Changes

- c72dced: update s3-file-uploader

  ## @toktokhan-dev 모듈 버젼 update

  프로젝트 내에 사용되고 있는 @toktokhan-dev 모듈들의 버젼이 일괄 업데이트 됐습니다.

  ## axios instance 주석처리

  기존에 제거되있던 refresh flow 의 주석을 다시 추가했습니다.

  ## s3-file-uploader 모듈 변경사항

  똑똑한 개발자의 서버 s3 구현사항이 달라짐에 따라, s3-file-upload 모듈이 수정되었습니다.

  ### Server & Client Flow 상 변경점

  1. backend server 로 부터 받는 presigned-url api 응답 schema 가 달라졌습니다. query param 으로 전달되던 값이 response body 의 fields 로 변경되었습니다.

  #### 기존

  ```json
  {
    "url": "https://s3.ap-northeast-2.amazonaws.com/toktokhan-dev/Key=...&SomeField=..."
  }
  ```

  #### 변경

  ```json
  {
    "url": "https://s3.ap-northeast-2.amazonaws.com/toktokhan-dev/Key=...",
    "fields": {
      "key": "...",
      "SomeField": "..."
    }
  }
  ```

  2. s3 로 upload 시 요청 method 와 reqeuest type 이 변경되었습니다.

  #### 기존

  - method: `PUT`
  - request-type: `File Object`

  ```ts
  const { url , fields } = await presignedUrlApi.createPresignedUrl({...});

  fetch(url, {
    method: 'PUT',
    body: file
  });

  ```

  #### 변경

  - method: `POST`
  - request-type: `FormData`

  변경된 요청 방법은 presigned-url 의 응답으로 받아온 fields 와 File, Content-Type 을 포함하는 `FormData` 로 만들어서 전달합니다.

  ```ts

  const { url , fields } = await presignedUrlApi.createPresignedUrl({...});

  const formData = new FormData();

  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value);
  });

  formData.append('file', file);
  formData.append('Content-Type', file.type);

  fetch(url, {
    method: 'POST',
    body: formData
  });

  ```

  ### Client S3FileUploader 모듈 변경점

  #### 기존

  기존에는 presigned url 을 프로젝트 서버로 요청해 생성후에, s3 에 파일을 업로드 하는 플로우를 한번에 처리하기위해 아래와 같은 모듈이 있었습니다.

  ```ts
  class S3FileUploader {
      private _createPresignedUrl () {...}
      private _uploadFileToS3 () {...}

      async uploadFile (file: File) {
          const { url, fields } = await this._createPresignedUrl();
          await this._uploadFileToS3(url, fields, file);
      }

      async uploadFiles (file: File[]) {
          const { url, fields } = await this._createPresignedUrl();
          const result =  Promise.allSattled(file.map(uplaodFileToS3));
          return {
              fulfilled: result.filter(r => r.status === 'fulfilled'),
              rejected: result.filter(r => r.status === 'rejected')
          }
      }
  }
  ```

  #### 변경

  위의 방식은 gen:api 를 통해 생성된 모듈을 사용하지 못한다는 단점이 있고, File 객체의 형식이 다른 react-native 를 포함해 프로젝트마다 달라 질 수 있는 구현 사항에 따라,
  S3FileUploaderApi 모듈을 직접 수정하게 될 여지가 있다는 단점이 있었습니다.

  따라서 아래처럼, 사용되는 함수를 주입받아 flow 만 처리하는 모듈이 새롭게 만들어 졌고, S3FileUplader 모듈은 오직 s3 에 파일을 업로드 하는 역할만을 수행하도록 변경되었습니다.

  ```ts
  // S3FileUpladerApi.ts
  class S3FileUploaderApi {
      async uploadFileToS3 ({ url, formData }) {...}
  }
  // S3FileUploaderApi.query.ts
  export const { uploadFile, uploadFiles } = createS3UploadFlow({
    // 아래 부분은 프로젝트 상황에 맞게 직접 작성합니다.
    prepareUpload: async (file: File) => {
      const { name, type } = file
      // gen:api 로 생성된  presigned url 을 생성하는 api 를 직접 import 해서 사용합니다.
      const { fields, url } = await presignedUrlApi.presignedUrlCreate({ name, type })
      const formData = new FormData()

      Object.entries(fields).forEach(([k, v]) => formData.append(k, v))
      formData.append('Content-Type', file.type)
      formData.append('file', file)

      return {
        url,
        formData,
        fields,
        file,
      }
    },
    // 아래 부분은 프로젝트 상황에 맞게 직접 작성합니다.
    uploadFileToS3: async ({ url, formData, file, fields }) => {
      await s3FileUploaderApi.uploadFileToS3({ url, formData })
      ...
    },
  })

  const useS3FileUploadMutate = (...) => useMutation({ mutationFn: uploadFile })
  ```

## 0.0.7

### Patch Changes

- 4f18ba6: isLogin 이 null 일때를 고려하여 ClientOnly 컴포넌트를 생성해 관리하는 로직이 추가되었습니다.
  아래 같은 경우는 isLogin 이 null 일때, falsy 한 값으로 간주하여, 로그인 버튼을 랜더링 하게 됩니다.

  ```tsx
  {
    isLogin ?
      <Button variant={'line'} size={'sm'} onClick={() => {}}>
        Logout
      </Button>
    : <Link variant={'line'} size={'sm'} href={ROUTES.LOGIN_MAIN}>
        Login
      </Link>
  }
  ```

  현재 토큰은 localStorage 에 저장되어 있지만, 서버에서 localStorage 는 접근 할수 없기 때문에, 하이드레이션이 일어나기전 서버에서 최로로 받은 코드는 토큰이 존재하지 않은 상태가 되게 됩니다.
  따라서, isLogin 값은 서버에선 의도적으로 null 을 할당 받게 되어있습니다.

  ```tsx
  const isLogin: boolean | null = isClient ? !!token?.access_token : null
  ```

  로그인 뿐 아니라 로컬 스토리지 관련 값을 사용할때는 `Null` 상태를 고려하여 최초 하이드레이션이 일어나기 전 시점에는 아예 랜더링을 안하는 쪽이 좋습니다.

  ```tsx
  () => ({
  if(isLogin === null) return null
  return isLogin ? <Button>Logout</Button> : <Button><Login/Button>
  })()
  ```

  똑똑한 개발자의 보일러플레이트에는 선언적으로 처리하기 위해 useClient 훅을 사용하여 `ClientOnly` 컴포넌트를 만들어 핸들링하는 로직이 추가되었습니다.

  ```tsx
  interface ClientOnlyProps {
    children: React.ReactNode
    fallback?: React.ReactNode
  }

  const ClientOnly = ({ children, fallback }: ClientOnlyProps) => {
    const isClient = useClient()
    if (!isClient) return isNullish(fallback) ? null : fallback

    return children
  }
  ```

  사용

  ```tsx
  <ClientOnly>
  { isLogin ? <Button>Logout</Button> : <Button>Login</Button }
  </ClientOnly>
  ```

## 0.0.6

### Patch Changes

- 57bdbfc: improve retry-request-manager

  ### clenupTimeout option 추가

  동시적인 expired 된 요청이 많을 때 refresh 요청이 2번 호출되는 이슈가 있었습니다.

  이유는 리프레시 갱신전 요청들 중, 이미 이전에 도착한 만료응답에 의해 [토큰 갱신 - 재요청] 플로우가 완료 된 후, 응답된 요청이 있다면 refresh flow 를 다시 타는것이 원인 이었습니다.

  예를들어

  - A 요청 - 만료 응답까지 1초
    - A 요청 refresh - 1초
    - A 요청 재요청 - 1초
    - refesh flow 초기화
  - B 요청 - 만료 응답까지 5초

  의 경우 A 요청 같은경우는 재요청 까지 총 3초가 걸리기 때문에 B 요청 응답 전에 리프레시 플로우가 완료(초기화)가됩니다.

  B 요청의 응답이 도착한 시점에는 이미 리프레시 플로우가 초기화 된 시점이기 때문에 리프레시가 2번 발생할 수 있습니다.

  따라서, 토큰을 정리하기 까지 timeout 으로 시간 여유를 주어 이슈 발생 확률을 낮추도록 개선 했습니다.

  요청이 여러개일 경우 정리 함수의 timeout 은 이전 것을 정리하고, 새롭게 timeout 을 설정하기 때문에, debounce 처럼 가장 마지막에 설정된 timout 함수만 지연된 시간으로 실행하게 됩니다.

  ```ts
  // configs/axios/instance.ts
  const retry = retryRequestManager({ cleanupTimeOut: 5000 })
  ```

  ```ts
  // configs/axios/retry-request-manager.ts
  export const retryRequestManager = (options?: {
    /**
     * 토큰 refresh 후, 설정한 시간안에 refresh 를 다시 시도 하지 않을경우 토큰을 삭제합니다.
     * @default 0
     *  */
    cleanupTimeOut?: number
  }) => {
    const { cleanupTimeOut = 0 } = options || {}
    let token: Promise<string> | null = null
    let timeoutId: NodeJS.Timeout | null = null

    return async (params: {
      getToken: () => Promise<string>
      onRefetch: (refreshed: string) => any
      onError: (error: any) => any
    }) => {
      try {
        ...
      } catch (err) {
        ...
      } finally {
        if (timeoutId) clearTimeout(timeoutId)
        if (token) {
          timeoutId = setTimeout(() => {
            token = null
          }, cleanupTimeOut)
        }
      }
    }
  }
  ```

## 0.0.5

### Patch Changes

- 73246c3: axios refresh & Token Naming

  # Axios Instance, Refresh

  기존 retryRequestManager 의 함수명에서 오타 수정 및 파일 이름이 변경되었습니다.

  # Token Naming

  기존 localStorage 의 token 키에 저장되던 객체의 property naming 이 수정되었습니다.

  #### 기존

  ```ts
  {
    access: string
    refresh: string
  }
  ```

  #### 변경

  ```ts
  {
    access_token: string
    refresh_token: string
  }
  ```

## 0.0.4

### Patch Changes

- 2eb1b20: update react-web

  @toktokhan-dev/react-web package 가 0.0.8 에서 0.0.11 로 수정 되었습니다.

  social 로그인 관련 api 들이 수정됨에 따라 예시가 수정되었습니다.

## 0.0.3

### Patch Changes

- 5fedf7f: - update'@toktokhan-dev/\*' packages
  - update social oauth
    - onFail parameters
  - update example react query v5대응
  - eslint downgrade v8.5.3

## 0.0.2

### Patch Changes

- 7e3e050: add gitignore
- 7ea6357: remove pnpm-lock.yaml
- b8b2bf3: add tok-cli-commit
- 2bf5a83: update packages version

## 0.0.1

### Patch Changes

- 9ff916e: 똑똑한 개발자 컨벤션이 담긴 Next.js page-router 가 적용 된 보일러 플레이트 입니다.

## 0.0.3

### Patch Changes

- a96412c: changeset action for git tag
- 05eafad: changeset action version -> publish

## 0.0.2

### Patch Changes

- 621ee4f: changeset action for git tag

## 0.0.1

### Patch Changes

- 58f516e: use pnpm in github action
- c21709a: changeset pakcage name
- f11c21e: package.json name
- 270d669: setup husky
- 3194fde: initialize
