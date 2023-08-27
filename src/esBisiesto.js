class anio{
    constructor(anio){
        this.anio=anio;
    }
    esBisiesto(){
        if(this.anioesDivisiblePor(400)) return true;
        if (this.anioesDivisiblePor(4) && this.anioNoEsDivisiblePor(100)) return  true ;
        return false;
    }

    anioesDivisiblePor(numero){
        return this.anio % numero == 0;
    }
    
    anioNoEsDivisiblePor(numero){
        return this.anio % numero !=0;
    }
}
export default anio