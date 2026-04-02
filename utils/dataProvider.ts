import { Page, Locator } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

export class DataProvider {

    static getTestDataFromJson (fileURLToPath: string): any {
        let data:string = JSON.parse(fs.readFileSync(fileURLToPath, 'utf-8'));
        return data;
    }

    static getTestDataFromCSV(fileURLToPath: string)
     {
        let data = parse(fs.readFileSync(fileURLToPath), {columns:true, skip_empty_lines:true});
        return data; 
    }
}