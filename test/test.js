import assert from 'assert';
import Postnummer from '../src/Postnummer';

describe('Postnummer', function() {
  describe('Validator', function() {
    it('should reject the given invalid Postnummer', function() {
        assert.equal(Postnummer.isValid(''), false);
        assert.equal(Postnummer.isValid('1'), false);
        assert.equal(Postnummer.isValid('12'), false);
        assert.equal(Postnummer.isValid('123'), false);
        assert.equal(Postnummer.isValid('1234'), false);
        assert.equal(Postnummer.isValid('12345'), false);
        assert.equal(Postnummer.isValid('123456'), false);
        assert.equal(Postnummer.isValid('1234567'), false);
        assert.equal(Postnummer.isValid('123456789'), false);
        assert.equal(Postnummer.isValid('12345678901'), false);
    });

    it('should accept the given valid Postnummer', function() {
        assert.equal(Postnummer.isValid('12345678'), true);
        assert.equal(Postnummer.isValid('1234567890'), true);
        assert.equal(Postnummer.isValid('2486527'), true);
        assert.equal(Postnummer.isValid('3674606'), true);
        assert.equal(Postnummer.isValid('40829480'), true);
        assert.equal(Postnummer.isValid('47317478'), true);
        assert.equal(Postnummer.isValid('47960455'), true);
        assert.equal(Postnummer.isValid('846460777'), true);
        assert.equal(Postnummer.isValid('902867372'), true);
    });
  });
});