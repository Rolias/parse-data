import * as chai from 'chai'
chai.should()
import {ParseData} from './ParseData'

describe('UNIT TEST (kinda) for ParseData module', () => {
  //beforeEach ( () =>{});
  //afterEach ( () =>{});
  it('getVersionInfo() should return version of this package', () => {
    const result = ParseData.getVersionInfo(process.cwd())
    console.log(result)
  })
})
