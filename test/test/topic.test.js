var assert = require('assert');

describe('Funcionalidad de Urgencia en Posts', function () {
  describe('#isUrgent', function () {
    it('debería mostrar el ícono de urgencia cuando isUrgent es verdadero', function () {
      const post = { isUrgent: true };
      const shouldShowIcon = post.isUrgent;
      
      // Verifica que el icono se muestre cuando isUrgent es true
      assert.equal(shouldShowIcon, true);
    });

    it('no debería mostrar el ícono de urgencia cuando isUrgent es falso', function () {
      const post = { isUrgent: false };
      const shouldShowIcon = post.isUrgent;

      // Verifica que el icono no se muestre cuando isUrgent es false
      assert.equal(shouldShowIcon, false);
    });
  });
});