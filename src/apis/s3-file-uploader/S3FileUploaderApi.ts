import { AxiosInstance } from 'axios'

export class S3FileUploaderApi {
  instance: AxiosInstance

  constructor({ instance }: { instance: AxiosInstance }) {
    this.instance = instance
  }
  /**
   * @description
   * 미리 할당된 S3 URL로 파일을 업로드합니다.
   * presigned url api 를 통해 받은 url 과 fields 를 사용하여 파일을 업로드합니다.
   *
   * @example - FormData Example
   *
   * ```
   *  const { fields, url } = await presignedUrlApi.presignedUrlCreate({
   *   data: {
   *     fileName: name,
   *     fileType: mime,
   *   },
   * })
   *
   * const formData = new FormData()
   *
   * Object.entries(fields).forEach(([key, value]) => formData.append(key, value))
   * formData.append('Content-Type', file.type)
   * formData.append('file', file)
   *
   * await s3FileUploaderApi.uploadFileToS3({ url, formData })
   * ```
   */
  uploadFileToS3 = async (params: {
    url: string
    formData: FormData
  }): Promise<void> => {
    await this.instance.request({
      method: 'POST',
      url: params.url,
      data: params.formData,
    })
  }
}
