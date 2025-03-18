function transformTitle(title:string):string {
    return title.replaceAll(" ", "-").replaceAll("'", "").replaceAll(":", "-").replaceAll(".", "")
}

export default transformTitle