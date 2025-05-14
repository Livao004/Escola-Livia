
    // Exibe o botão ao rolar
    window.onscroll = function () {
      const btn = document.getElementById("btnTopo");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Função que volta ao topo suavemente
    function voltarAoTopo() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
 