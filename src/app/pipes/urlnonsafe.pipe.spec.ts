import { UrlnonsafePipe } from './urlnonsafe.pipe';

describe('UrlnonsafePipe', () => {
  it('create an instance', () => {
    const pipe = new UrlnonsafePipe();
    expect(pipe).toBeTruthy();
  });
});
