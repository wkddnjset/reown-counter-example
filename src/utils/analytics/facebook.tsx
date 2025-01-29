import React from 'react'

import { Analytics } from './types'
import { checkAnalytics } from './utils/check-analytics'

/**
 * @brief Meta pixel(Facebook) event가 정의된 클래스입니다.
 * @description Meta 픽셀의 fbq('track') 함수를 사용하여 다양한 표준 이벤트를 추적할 수 있습니다.
 * 또한 표준 이벤트는 특정 개체 속성이 포함된 매개변수 개체를 지원하므로 이벤트에 대한 상세한 정보를 포함할 수 있습니다.
 * @see Docs https://developers.facebook.com/docs/meta-pixel/reference#object-properties
 * @see Docs https://developers.facebook.com/docs/marketing-api/conversions-api/guides/gtm-server-side?locale=ko_KR
 */
export class FacebookAnalytics {
  private fbq: facebook.Pixel.Event | null = null

  /**
   * FacebookAnalytics 클래스의 새 인스턴스를 생성합니다.
   * @param key Facebook 픽셀 키입니다.
   */
  constructor(private key?: string) {
    this.key = key
    this.fbq = checkAnalytics({
      platform: 'Facebook',
      clientID: key,
      getAnalytics: () => window.fbq,
    })
  }

  /**
   * 회원가입 완료 이벤트를 추적합니다.
   *
   * @param params - 등록 이벤트에 필요한 데이터 (예: content_name, currency, value)
   *
   * @example
   * <Button onClick={() => facebookAnalytics.completeRegistration({ content_name: 'Signup Page', currency: 'USD', value: 100 })}>
   *   회원가입 완료
   * </Button>
   */
  completeRegistration = (params: Analytics.CompleteRegistration['Fbq']) => {
    this.fbq?.('track', 'CompleteRegistration', params)
  }

  /**
   * 페이지 조회 이벤트를 추적합니다. (메인, 상세, 기타 모든 페이지)
   *
   * @param params - 페이지 조회 이벤트에 필요한 데이터 (예: content_ids, content_name)
   *
   * @example
   * <Button onClick={() => facebookAnalytics.pageView({ content_ids: [123, 456], content_name: 'Homepage' })}>
   *   페이지 조회
   * </Button>
   */
  pageView = (params: Analytics.PageView['Fbq']) => {
    this.fbq?.('track', 'ViewContent', params)
  }

  /**
   * 콘텐츠 조회 이벤트를 추적합니다. (상세 페이지를 의미)
   *
   * @param params - 콘텐츠 조회 이벤트에 필요한 데이터 (예: content_name, content_ids, content_type, currency, value)
   *
   * @example
   * <Button onClick={() => facebookAnalytics.viewContent({ content_name: 'Product Page', content_ids: [123], content_type: 'product', currency: 'USD', value: 200 })}>
   *   콘텐츠 조회
   * </Button>
   */
  viewContent = (params: Analytics.ViewContent['Fbq']) => {
    this.fbq?.('track', 'ViewContent', params)
  }

  /**
   * 검색 이벤트를 추적합니다.
   *
   * @param params - 검색 이벤트에 필요한 데이터 (예: search_string, content_ids, content_type, currency, value)
   *
   * @example
   * <Button onClick={() => facebookAnalytics.search({ search_string: 'Laptop', content_ids: [123], content_type: 'product', currency: 'USD', value: 500 })}>
   *   검색
   * </Button>
   */
  search = (params: Analytics.Search['Fbq']) => {
    this.fbq?.('track', 'Search', params)
  }

  /**
   * Facebook 픽셀 스크립트를 설정하기 위한 메서드입니다. _document.tsx 경로에 추가해주세요.
   * @returns Facebook 픽셀 스크립트와 noscript 태그에 대한 JSX 요소입니다.
   *
   * @example
   * <FacebookAnalytics.FacebookSetter />
   */
  FacebookSetter = () => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${this.key}');
        `,
        }}
      />
    )
  }
}
