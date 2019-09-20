import * as fs from 'fs'
import * as path from 'path'

interface FileAndSeparator {
  filePath: string
  separator: string
}

export class ParseData {
  /**
   * Designed for CSV like data. Read the file from the passed path and create
   * split on each new line character into a row. Then parse each row the for the
   * specified separator return an array of array of strings. The outer array represents
   * each row of data and the inner array represents the columns in that row
   */
  public static parseSpreadsheetFile({filePath, separator}: FileAndSeparator): string[][] {
    const sheetData: string[][] = []
    const rows = ParseData.parseToArray(filePath)
    for (const row of rows) {
      const rowArray = row.split(separator)
      sheetData.push(rowArray)
    }
    return sheetData
  }

  public static parseToArray(filePath: string): string[] {
    const rawData = fs.readFileSync(filePath).toString(`utf-8`)
    const rows = rawData.split(`\n`)
    return rows.map((e): string => e.trim())
  }

  public static getVersionInfo(rootPath: string): string {
    const filePath = path.resolve(rootPath, `./package.json`)
    const rawData = fs.readFileSync(filePath).toString(`utf-8`)
    const jsonData = JSON.parse(rawData)
    return jsonData.version
  }
}
