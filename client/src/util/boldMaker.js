export const boldMaker = (input, list) => {
	return list.map((data) => {
		let regex = new RegExp(input, "gim");
		return data.sickNm.replace(regex, `<b>${input}<b>`)
	})

}