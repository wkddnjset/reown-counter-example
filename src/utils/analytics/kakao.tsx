import React from 'react'

import { Analytics } from './types'
import { checkAnalytics } from './utils/check-analytics'

/**
 * @brief Kakao Pixel에서 제공하는 이벤트가 정의된 클래스입니다.
 * @description 카카오 픽셀에서는 여러 종류의 이벤트를 전송할 수 있습니다.
 * 수집된 데이터를 이용하여 타겟팅, 카탈로그 소재정보 수집, 전환 보고서, 전환 최적화 등의 다양한 카카오 광고 목적으로 활용할 수 있습니다.
 * @see Docs https://kakaoad.github.io/kakao-pixel/
 */
export class KakaoAnalytics {
  private kakao: kakao.Pixel.Event | null = null

  /**
   * KakaoAnalytics 클래스의 새 인스턴스를 생성합니다.
   * @param key 카카오 픽셀 키입니다.
   */
  constructor(private key?: string) {
    this.kakao = checkAnalytics({
      platform: 'Kakao',
      clientID: key,
      getAnalytics: () => window.kakaoPixel(key || ''),
    })
  }
  /**
   * 일반적으로 회원가입 완료 이벤트를 추적하는데에 사용됩니다.
   *
   * @param params - 등록 이벤트에 필요한 데이터 (태그 등)
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.completeRegistration({ tag: 'user1' })}>회원가입 완료</Button>
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Kakao']) => {
    this.kakao?.completeRegistration(params?.tag)
  }

  /**
   * 페이지 조회 이벤트를 전송합니다.
   *
   * @param params - 페이지 조회 이벤트에 필요한 데이터 (태그 등)
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.pageView({ tag: '홈 페이지' })}>페이지 조회</Button>
   */
  pageView = (params: Analytics.PageView['Kakao']) => {
    this.kakao?.pageView(params?.tag)
  }

  /**
   * 콘텐츠/상품 조회 이벤트를 전송합니다.
   *
   * @param params - 콘텐츠 조회 이벤트에 필요한 데이터
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.viewContent({ tag: '상품1' })}>콘텐츠 보기</Button>
   */
  viewContent = (params: Analytics.ViewContent['Kakao']) => {
    this.kakao?.viewContent(params)
  }

  /**
   * 검색 이벤트를 전송합니다.
   *
   * @param params - 검색 이벤트에 필요한 데이터
   *
   * @example
   * <Button onClick={() => kakaoAnalytics.search({ tag: "카테고리", keyword: "검색어"})}>검색</Button>
   */
  search = (params: Analytics.Search['Kakao']) => {
    this.kakao?.search(params)
  }

  /**
   * Kakao Pixel 스크립트를 설정하기 위한 메서드입니다. _document.tsx 경로에 추가해주세요.
   *
   * @returns Kakao Pixel 설정을 위한 스크립트 JSX 요소를 반환합니다.
   */
  KakaoSetter = () => {
    return (
      <script
        async
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/kp.js"
      ></script>
    )
  }
}
