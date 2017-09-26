import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'fnapp',
  templateUrl: './fnapp.component.html',
  styleUrls: ['./fnapp.component.css']
})

export class FnappComponent {
  get panels() {
    return [
        {
            'title': 'Como buscar um morador ou uma unidade?', 'content': 'Procure por um grupo específico, número de unidade ou por um único morador no condomínio utilizando a caixa de busca logo abaixo da ilustração.', 'imgsrc': 'assets/img/unidade1.png'
        },
        {
            'title': 'Como adicionar um morador?', 'content': 'Localize a unidade desejada utilizando a caixa de busca da tela de unidades (caso não saiba onde fica, clique em "Como buscar um morador ou uma unidade?"). Depois, localize o botão "Add. Usuário". Uma nova tela abrirá onde você poderá colocar todos os dados do novo morador.', 'imgsrc': 'assets/img/unidade2.png'
        },
        {
            'title': 'Como alertar a uma unidade que a correspondência chegou?', 'content': 'Na tela da unidade, clique no botão da carta azul "Alertar Correspondência" e envie uma mensagem que a correspondência chegou.', 'imgsrc': 'assets/img/unidade3.png'
        },
        {
            'title': 'Como resetar o código de um morador?', 'content': 'Na tela da unidade, clique na chave azul "Resetar Código". Os moradores que já possuem cadastro e não foram removidos, não serão afetados em nada. Este recurso serve para quando alguém sai de uma unidade e é excluído, prevenindo que ele se cadastre no aplicativo e entre na unidade novamente. O código antigo fica invalidado para sempre.', 'imgsrc': 'assets/img/unidade4.png'
        }
    ];
  }
  get panels2() {
    return [
        {
            'title': 'Como cadastrar uma nova visita?', 'content': 'Localize a unidade através buscador da tela principal. Em seguida, clique no segundo botão do menu vertical, "Visitantes". Depois, clique no botão verde "Adicionar Visitante" e preencha os dados. Após cadastrado, você terá as opções de editar, ver o histórico e enviar notificação de nova visita desta pessoa, além de poder bloquear novas vindas.', 'imgsrc': 'assets/img/portaria1.png'
        },
        {
            'title': 'Como lançar a entrada de um visitante pré-aprovado?', 'content': 'Assim que a visita pré-aprovada chegar, clique em cima de seu nome na área Acesso e pressione o botão verde "Lançar Entrada" na nova janela que se abre. O morador será notificado que a visita chegou.', 'imgsrc': 'assets/img/portaria2.png'
        },
        {
            'title': 'Que tipo de visita pode ser pré-autorizada?', 'content': 'Qualquer tipo de visita! Desde um familiar até um prestador de serviço que fará a reforma da sua sala.', 'imgsrc': 'assets/img/portaria3.png'
        }
    ];
  }
  get panels3() {
    return [
        {
            'title': 'A quais grupos posso enviar meus informativos?', 'content': 'Você pode enviar apenas a proprietários, a um bloco/lote específico ou uma unidade específica.', 'imgsrc': 'assets/img/comunicados1.png'
        },
        {
            'title': 'Quais tipos de arquivo posso anexar ao meu informativo?', 'content': 'Você pode anexar qualquer tipo de arquivo, exceto vídeos, mas lembrando que o limite é de 3 arquivos por comunicado e o tamanho de cada arquivo não pode passar de 100MB.', 'imgsrc': 'assets/img/comunicados2.png'
        },
        {
            'title': 'Como funciona a categorização dos informativos?', 'content': 'A categorização pode ser usada para controlar melhor os documentos do condomínio; a função de \'Fale com o condomínio\' vai muito além de avisar que a água acabou. Você pode, por exemplo, enviar balancetes, atas, cobranças e qualquer tipo de anúncio público ou privado.', 'imgsrc': 'assets/img/comunicados3.png'
        },
        {
            'title': 'Como eu altero ou deleto um informativo?', 'content': 'Clique na aba "Comunicados | Ocorrências" no menu lateral esquerdo. Você será automaticamente redirecionado a todos os comunicados do seu condomínio. Clicando no comunicado enviado, aparecerão seus detalhes na janela à direita e lá você pode editar, deletar e baixar os anexos enviados.', 'imgsrc': 'assets/img/comunicados4.png'
        }
    ];
  }
  get panels4() {
    return [
        {
            'title': 'Como sei se existem reservas pendentes para aprovar ou reprovar?', 'content': 'Em qualquer tela, você pode consultar o menu superior e verificar novas interações. Neste caso, existe uma reserva pendente de moderação.', 'imgsrc': 'assets/img/reservas1.png'
        },
        {
            'title': 'Aprovei uma reserva por engano. Como faço para deletá-la?', 'content': 'Clique no botão "Agenda e Reseva" no menu à esquerda e selecione a área que você aprovou por engano. Vá até a janela ao lado da calendário e clique na lixeira na reserva que você deseja reprovar.', 'imgsrc': 'assets/img/reservas2.png'
        },
        {
            'title': 'Por que o calendário da Agenda do Condomínio e de Reservas são diferentes?', 'content': 'Ambos comportam itens diferentes. A Agenda do Condomínio refere-se a manutenções, comunicados, atividades planejadas. O calendário de Reservas é apenas sobre o uso de áreas comuns.', 'imgsrc': 'assets/img/reservas3.png'
        },
        {
            'title': 'O que é a fila de espera?', 'content': 'A fila de espera acontece quando duas reservas para a mesma área comum no mesmo período são aprovadas. Ela parte do princípio que, se o primeiro solicitante da área desistir, a reserva vai para quem está em primeiro na fila de espera, e assim por diante.', 'imgsrc': 'assets/img/reservas4.png'
        }
    ];
  }
  get panels5() {
    return [
        {
            'title': 'Como edito enquetes já publicadas?', 'content': 'Vá ao menu principal à esquerda e clique em Postagens. Em seguida, clique em Enquetes. Localize a enquete que deseja editar e clique nela. Os detalhes e votos aparecerão à direita, junto com botões para editar e imprimir.', 'imgsrc': 'assets/img/enquetes1.png'
        },
        {
            'title': 'Como eu gero relatórios de enquetes?', 'content': 'Localize a enquete que deseja gerar o relatório e clique nela. Na tela que se abre, clique no ícone da impressora. Uma nova página será aberta em seu navegador com todos os detalhes da votação.', 'imgsrc': 'assets/img/enquetes2.png'
        },
        {
            'title': 'Quem pode votar nas enquetes?', 'content': 'Dependendo da configuração da enquete, ela pode ser votada por todos ou apenas por proprietários.', 'imgsrc': 'assets/img/enquetes3.png'
        },
        {
            'title': 'Os condôminos podem ver quem votou?', 'content': 'Não, esta informação fica restrita ao administrador e só é possível visualizar os votos através do relatório gerado na página de Enquetes ou clicando em cada opção no sistema.', 'imgsrc': 'assets/img/enquetes4.png', 'datatarget': '\#enquetesQuatro'
        }
    ];
  }
}