import { Competitor } from "./competitor";
import { connectionMysql } from "./db";

export const getCompetitors = () => {
    return new Promise((resolve, reject) => {
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


