import { getCompetitors, updateCompetitorBirthday } from "./functions";


const formatedDate = (date: string) => {
    const dateDefault = "0000-00-00 00:00:00";

    if (!(date.includes("-"))) {
        const parts = date.split(" ");
        console.log(parts);

        const dateParts = parts[0].split("/");
        console.log(dateParts);
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    }
    if (date.includes("E+")) {
        return dateDefault;
    }
    return null;
}

(async () => {
    try {
        const competitors = await getCompetitors();
        for await (const c of competitors) {
            const newFormat = formatedDate(c.competitor_birthday);
            if (newFormat) {
                const result = await updateCompetitorBirthday(c.competitor_id, newFormat);
                console.log("se actualizo", { result, id: c.competitor_id });
            }
        }

    } catch (error) {
        console.log(error);

    }
})()