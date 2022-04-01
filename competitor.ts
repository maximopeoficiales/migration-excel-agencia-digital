
export interface Competitor {
    competitor_id: number;
    competitor_registeredby: number;
    competitor_registered: Date;
    competitor_name: string;
    competitor_lastname: string;
    competitor_email: string;
    competitor_phone: number;
    competitor_cellphone: number;
    competitor_birthday: string;
    competitor_genre: string;
    competitor_favoritestores: string;
    competitor_visitfrequency: string;
    competitor_address: string;
    competitor_addressext?: any;
    competitor_idtype: string;
    competitor_idnumber: string;
    mailing_subscribe: string;
    competitor_lat: string;
    competitor_long: string;
    competitor_distance_from_cc: number;
}

