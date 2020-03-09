import {reducer} from '../src/reducers';
describe('actionTest', () => {
  it.each`
    sampleAction | sampleReducer
    ${{type: 'UPDATE_CONTENT', content: 'content'}} | ${{content: 'content'}}
    ${{type: 'UNKNOWN', content: 'unknown'}} | ${{content: ''}}
  `('should reduce into $sampleReducer when action produced is $sampleAction', ({sampleAction, sampleReducer}) => {
    expect(reducer({}, sampleAction)).toStrictEqual(sampleReducer);
  });
});