export type Project  = {
    name : string
    description : string
    tech : string[]
    github : string
}

export const projects: Project[] = [
    {
        name : "Blackjack",
        description : "Juego de Blackjack desarrollado para jugarse con GUI interactiva (En desarrollo aun)",
        tech : ["C++"],
        github : "https://github.com/Airamsveedraaa/Blackjack" 
    },

    {
        name : "Simulador de E/S",
        description : "Simulador de gestión del disco para la asignatura de Diseño y Estructura de Sistemas Operativos",
        tech : ["C#"],
        github : "https://github.com/Airamsveedraaa/AppEntradaSalidaDESO"
    },

    {
        name : "Simulador de Ficheros",
        description : "Simulador de gestión del sistema de ficheros en distintos sistemas como puede ser FAT, UNIX o NTFS para la asignatura de Diseño y Estructura de Sistemas Operativos (En desarrollo aun)",
        tech : ["C#"],
        github : "https://github.com/Airamsveedraaa/AppFicherosDESO"
    }

]