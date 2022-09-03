import React from "react"
import { IconType } from "react-icons/lib"

export type UploaderProps = {
    setImage: React.Dispatch<React.SetStateAction<any>>,
    setImageURL: React.Dispatch<React.SetStateAction<string>>,
    imageMaxSize?: number,
    imageMaxWidth?: number,
    imageMaxHeight?: number,
    imageTypes?: string[],
    uploadText?: string,
    uploadIcon?: JSX.Element,
    uploadIconSize?: string,
    uploadIconColor?: string,
    uploadTextColor?: string,
    uploadTextSize?: string,
    uploadTextFontWeight?: string,
    uploadTextFontFamily?: string,
    uploadTextFontStyle?: string,
}

export type ImageBoxProps = {
    setImage: React.Dispatch<React.SetStateAction<any>>,
    imageURL: string,
    imageBoxWidth?: string,
    imageBoxHeight?: string,
    imageBoxBorderRadius?: string,
    imageBoxBorder?: string,
    imageBoxBorderColor?: string,
    imageBoxBorderWidth?: string,
    imageBoxBorderStyle?: string,
    imageBoxBoxShadow?: string,
}