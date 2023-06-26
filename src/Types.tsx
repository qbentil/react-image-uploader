import React from "react"

export type UploaderProps = {
    setImage: React.Dispatch<React.SetStateAction<any>>,
    setImageURL: React.Dispatch<React.SetStateAction<string>>,
    imageMaxSize?: number,
    imageMaxWidth?: number,
    imageMaxHeight?: number,
    imageTypes?: string[],
    uploadText?: string,
    uploadIcon?: JSX.Element,
    extraClass?: string,
}

export type ImageBoxProps = {
    setImage: React.Dispatch<React.SetStateAction<any>>,
    setImageURL: React.Dispatch<React.SetStateAction<any>>,
    imageURL: string,
    extraClass?: string,
}

export type PackageProps = {
    uploadText?: string,
    uploadIcon?: JSX.Element,
    image: any,
    setImage: React.Dispatch<React.SetStateAction<any>>,
    imageURL: string,
    setImageURL: React.Dispatch<React.SetStateAction<any>>,
    extraClass?: string,
}