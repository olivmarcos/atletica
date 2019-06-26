$(document).ready(function() {
    $("#inicio").click(function(){
		$(".load").load("inicio.html");
	});
	
	$("#evento").click(function(){
		$(".load").load("evento.html");
	});

	$("#produto").click(function(){
		$(".load").load("produto.html");
	});

	$("#parceiro").click(function(){
		$(".load").load("parceiro.html");
	});

	$("#venda").click(function() {
		$(".formularios").load("venda.html")
	})

	$("#associado").click(function() {
		$(".formularios").load("associado.html")
	})

	$("#voltar").click(function() {
		$(".formularios").load("adm.html")
	})
})
