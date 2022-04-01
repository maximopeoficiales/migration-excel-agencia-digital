import { Competitor } from "./competitor";
import { connectionMysql } from "./db";

export const getCompetitors = () => {
    return new Promise<Competitor[]>((resolve, reject) => {
        connectionMysql.execute(
            `SELECT * FROM cfasccjp_competitors`,
            [],
            function (err, results, fields) {
                if (err) {
                    reject(err);
                }
                resolve(results as Competitor[]);
            }
        );
    });
}

export const updateCompetitorBirthday = (idCompetitor: number, birthday: string) => {
    return new Promise((resolve, reject) => {
        connectionMysql.execute(
            `UPDATE cfasccjp_competitors SET competitor_birthday = ? WHERE competitor_id = ?`,
            [birthday, idCompetitor],
            function (err, results, fields) {
                if (err) {
                    reject(err);
                }
                resolve(true);
            }
        );
    });
}


