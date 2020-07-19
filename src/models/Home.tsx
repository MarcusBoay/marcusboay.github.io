export class SectionInfoModel {
    title: string
    year: number
    role: string
    description: Array<string>
    links: Array<SectionInfoLinkModel>
    image: string
    imageAlt: string

    constructor(
        title: string,
        year: number,
        role: string,
        description: Array<string>,
        links: Array<SectionInfoLinkModel>,
        image: string,
        imageAlt: string
    ) {
        this.title = title
        this.year = year
        this.role = role
        this.description = description
        this.links = links
        this.image = image
        this.imageAlt = imageAlt
    }
}

export class SectionInfoLinkModel {
    title: string
    url: string

    constructor(title: string, url: string) {
        this.title = title
        this.url = url
    }
}
