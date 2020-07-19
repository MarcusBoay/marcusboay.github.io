export class SectionInfoModel {
    title: string
    description: Array<string>
    links: Array<SectionInfoLinkModel>
    image: string

    constructor(
        title: string,
        description: Array<string>,
        links: Array<SectionInfoLinkModel>,
        image: string
    ) {
        this.title = title
        this.description = description
        this.links = links
        this.image = image
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
