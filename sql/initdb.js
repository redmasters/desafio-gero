const Database = require('./config');

const initDb = {
    async init() {
        const db = await Database();
        
        await db.exec(`
        CREATE TABLE pacientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nomePaciente VARCHAR(80),
            dataNasc TEXT,
            sexo VARCHAR(1)
            )`);
            
            await db.exec(`
            CREATE TABLE medicos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nomeMedico VARCHAR(80),
                especializacao TEXT 
                )`);
                
                await db.exec(`
                CREATE TABLE agendamentos (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    id_paciente INTEGER,
                    id_medico INTEGER,
                    data TEXT,
                    FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
                    FOREIGN KEY (id_medico) REFERENCES medicos(id)
                    )`);
                    
                    await db.close();
                    
                }
                
            }
            
            initDb.init();