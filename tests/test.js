var expect = require('chai').expect;
import Foo from '../src/index';

describe('ES6 Foo', () => {

    let foo;

    beforeEach(done => {
        foo = new Foo();
        done();
    });

    it('should return Do Something when calling doSomething', done => {

        expect(foo.doSomething()).to.equal('Do Something');
        done();

    });

});