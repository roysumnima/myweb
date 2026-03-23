// export project type interface:
export interface Page {
    alt: string,
    imgsrc: string
    rotation?: 0 | 90 | 180 | 270;
}

export interface Project {
    id: string,
    pages : Page[]
}

export interface ProjectList {
    [key: string] : Project
}