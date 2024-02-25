export type League = {
  id: number
  name: string
}

export type ImageType = {
  fields: {
    title: string
    file: {
      url: string
    }
  }
}

export type BackgroundImageType = {
  fields: {
    description: string
    desktopImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    mobileImage?: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
}

export type CTAType = {
  fields: {
    copy: string
    secondary: boolean
    url: string
  }
}
