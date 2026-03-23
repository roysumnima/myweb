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

export const midjourney: Project = {
    id: "midjourney",
    pages : [
        {
            "alt" : "midjourney page 1",
            "imgsrc" : "https://v1.padlet.pics/3/image.webp?t=c_limit%2Cdpr_2%2Ch_720%2Cw_508&url=https%3A%2F%2Fu1.padletusercontent.com%2Fuploads%2Fpadlet-uploads-usc1%2F216829712%2Fef859db6b44b3cbfd6d41d3d4dc84bc9%2FWho_S_afraid_of_midjourney.png%3Fexpiry_token%3D5WaHZRdGG3LkUVQGy3SZ-zdRtq89aJeottSBaF_Hii8dmxJqYDvE2-MDbblcM-ZrVekXW99RReKkJFIoMoKio1paaQJqF8blpaUElCNA2NdDGDHfmhlKA73Pj_n-U2TE3ZAt_APOpqb8Xch2L4GVBeJViD71PmMf7XLuGwxF1AIT7VsI4WRDi1hCGDCaGws0vKY-LukHJRKoQlefyasE7Hqr-utEtOQ8Wgeb1cxxPJZ7gMhyTwqCgfVcyxkLbAfo"
        }
    ]
}

export const Allprojects: ProjectList = {
    "biophilia" : biophilia,
    "untold" : untold,
    "midjourney" : midjourney
}