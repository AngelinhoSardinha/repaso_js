{
    tvSamsung = {
        nombre : "TV Samsung 42'",
        categoria : "Television",
        unidades : 4,
        precio : 345.95
    }
    tvSamsung.getImporte = function() {
        let hola = tvSamsung.precio * tvSamsung.unidades;
        return hola
    }
}
console.log(tvSamsung.getImporte());