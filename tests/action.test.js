import {updateContent} from '../src/actions';
describe('actionTest', () => {
  it('updateContent', done => {
    const expectedAction = {
      type: 'UPDATE_CONTENT',
      content: 'content'
    };
    const actualAction = updateContent('content');
    done();
    expect(actualAction).toStrictEqual(expectedAction);
  });
});
