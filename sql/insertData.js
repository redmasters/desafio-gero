const Database = require('./config')

const insertData = {
    async insert() {
       const db = await Database();
        
        //Insere os pacientes a respectiva tabela
       await db.exec(`
           INSERT INTO pacientes VALUES (
               null,
               'Hyoga',
               '15-07-1978',
               'M'               
           )`);

        await db.exec(`
           INSERT INTO pacientes VALUES (
               null,
               'Marin',
               '28-10-1988',
               'F'
           )`);
           
        await db.exec(`
           INSERT INTO pacientes VALUES (
               null,
               'Kiki',
               '02-01-1998',
               'M'
           )`);

        // Insere medicos
        await db.exec(`
        INSERT INTO medicos VALUES (
            null, 
            'Camus',
            'Cardiologista'
        )`);
        
        await db.exec(`
        INSERT INTO medicos VALUES (
            null,
            'Saori',
            'Clinico Geral'
        )`);
        
        await db.exec(`
        INSERT INTO medicos VALUES (
            null,
            'Seiya',
            'Clinico Geral'
        )`);
        
    await db.close();
    }
}

insertData.insert();