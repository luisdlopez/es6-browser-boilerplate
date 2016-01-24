var expect = require('chai').expect;
import Foo from '../src/index';

describe('ES6 Foo', function () {

    let foo;

    beforeEach(()=> {
        foo = new Foo();
    });

    it('should return Do Something when calling doSomething', ()=> {
        expect(foo.doSomething()).to.equal('Do Something');
    });

});