import type { Project, ProjectList } from "../types";

export const biophilia: Project = {
    id: "biophilia",
    pages : [
        {
            "alt" : "biophilia page 1",
            "imgsrc" : "https://u.cubeupload.com/justrghost/biophiliafull.jpg",
            "rotation": 180
        },
        {
            "alt" : "biophilia page 2",
            "imgsrc" : "https://u.cubeupload.com/justrghost/biophiliafull.jpg"}
    ]

}

export const untold: Project = {
    id: "untold",
    pages : [
        {
            "alt" : "[untold workshop zine cover]",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine1.png"
        },
        {
            "alt" : "was it hard to break in two?",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine23.png"
        },
        {
            "alt" : "is human suffering what you thought it would be?",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine45.png"
        },
        {
            "alt" : "appropriation is a thirst for community; love as a commodity is trendy right now",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine67.png"

        },
        {
            "alt" : "i recommend skin and sheer fabrics",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine8.png"},
        {
            "alt" : "[untold workshop zine full page]",
            "imgsrc" : "https://u.cubeupload.com/justrghost/Untoldworkshopzine9.png"
        }
    ]
}

export const rapture: Project = {
    id: "rapture",
    pages : [
        {
            "alt" : "rapture page 1",
            "imgsrc" : "https://u.cubeupload.com/justrghost/therapturerepeated.jpg"
        }
    ]
}

export const sainteater: Project = {
    id: "sainteater",
    pages : [
        {
            "alt" : "sainteater page 1",
            "imgsrc" : "https://u.cubeupload.com/justrghost/rgmmigrationpostcard.jpg"
        }
    ]
}

export const Allprojects: ProjectList = {
    "biophilia" : biophilia,
    "untold" : untold,
    "rapture" : rapture,
    "sainteater" : sainteater
}