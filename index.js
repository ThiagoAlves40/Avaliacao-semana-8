function ContaBancaria (titular, saldo){
    this.titular = titular;
    this.saldo = saldo;

    this.verSaldo = function(){
        console.log("R$" + saldo);
    }

    this.depositar = function(valor){
        saldo = saldo + valor;
        console.log("Um deposito no valor de R$" + valor + " foi realizado com sucesso."); 
    }

    this.sacar = function(valor){
        if(saldo>=valor){
            saldo = saldo - valor;
            console.log("Um saque no valor de R$" + valor + " foi realizado com sucesso.");
        }else{
            console.log("Saldo insuficiente.");
        }
    }
}

let cliente = new ContaBancaria('João', 1000);

cliente.verSaldo();
cliente.sacar(500);
cliente.verSaldo();
cliente.depositar(250);
cliente.verSaldo();
cliente.sacar(750);
cliente.verSaldo();
cliente.sacar(50);