import { getCompetitors, updateCompetitorBirthday } from "./functions";


const formatedDate = (date: string) => {
    const dateDefault = "2022-01-01 00:00:00";
    if (date.length > 1) {
        if (date.includes("E")) {
            return dateDefault;
        }
        if (!(date.includes("-"))) {
            const parts = date.split(" ");
            // console.log(parts);

            const dateParts = parts[0].split("/");
            // console.log(dateParts);
            let format = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            return format.trim() + " 00:00:00";
        }
    } else {
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
                console.log({ result, id: c.competitor_id });
            }
        }


        console.log("Done Operation");

    } catch (error) {
        console.log(error);

    }
})()
// SELECT count(*) FROM `cfasccjp_competitors` WHERE competitor_birthday = "2022-01-01 00:00:00";
