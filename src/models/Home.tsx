export class SectionInfoModel {
    title: string
    description: string
    links: Array<SectionInfoLinkModel>
    // image: string

    constructor(
        title: string,
        description: string,
        links: Array<SectionInfoLinkModel>
    ) {
        this.title = title
        this.description = description
        this.links = links
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
