public class fatorialDesajeitado {
    
        int clumsy(int n) {
            int counter = 1;
            int resultado = n;
            int paraSomar = 0;
    
            while (n > 1) {
    
                if (counter == 1) {
                    resultado = n * (n - 1);
                    if (paraSomar != 0) {
                        resultado = resultado * -1;
                    }
                    n--;
    
                    counter = 2;
                } else if (counter == 2) {
                    resultado = (resultado / (n - 1));
                    n--;
                    counter = 3;
                } else if (counter == 3) {
                    resultado = resultado + (n - 1);
                    n--;
    
                    counter = 4;
                    if (paraSomar == 0) {
                        paraSomar = resultado;
                        resultado = 0;
                    } else {
                        paraSomar += resultado;
                        resultado = 0;
                    };
                } else if (counter == 4) {
    
                    if (n == 2) {
                        paraSomar -= 1;
                        counter = 1;
                        n--;
                    } else {
                        n--;
    
                        counter = 1;
    
                        resultado = 0;
                    };
                };
            };
            paraSomar += (resultado);
    
            return (paraSomar);
        };
    };