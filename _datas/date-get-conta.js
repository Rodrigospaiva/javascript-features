const contas = [
    {nome: 'Luz', valor: 250, vencimento: 1605279748399},
    {nome: 'Celular', valor: 100, vencimento: 1603119748399},
    {nome: 'Fatura Cartão', valor: 7600, vencimento: 1608390148399},
  ];
  
  let totalAPagar = 0;
  const hoje = new Date();
  const timeHoje = hoje.getTime();

  
  for  (let i = 0; i <    ; i++) {
    const conta = contas[i];
  
    if ( contas.vencimento > timeHoje ) {
      totalAPagar += conta.valor;
    }

    
  }
  
  console.log(totalAPagar);