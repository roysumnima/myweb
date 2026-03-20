// export project type interface:
export interface Page {
    alt: string,
    imgsrc: string
}

export interface Project {
    id: string,
    pages : Page[]
}

export interface ProjectList {
    [key: string] : Project
}