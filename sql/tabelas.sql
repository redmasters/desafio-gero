-- Tabelas pacientes, medicos e agendamentos
-- pacientes
CREATE TABLE pacientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomePaciente VARCHAR(80),
    dataNasc TEXT,
    sexo VARCHAR(1)
)

-- medicos
CREATE TABLE medicos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeMedico VARCHAR(80),
    especializacao TEXT
)

-- agendamentos
CREATE TABLE agendamentos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_paciente INTEGER,
    id_medico INTEGER,
    data TEXT,
    FOREIGN KEY (id_paciente) REFERENCES pacientes.(id),
    FOREIGN KEY (id_medico) REFERENCES medicos.(id),
    
)

-- VIEW vAgendamentos
CREATE VIEW vAgendamentos AS 
SELECT 
    agendamentos.id, 
    medicos.nomeMedico, 
    medicos.especializacao, 
    pacientes.nomePaciente, 
    agendamentos.data 
FROM 
    agendamentos 
    INNER JOIN medicos ON medicos.id = agendamentos.id_medico 
    INNER JOIN pacientes ON pacientes.id = agendamentos.id_paciente

-- Insert de Dados
INSERT INTO pacientes VALUES( null, 'Hyoga', '15-07-78', 'M' ) 
INSERT INTO pacientes VALUES( null, 'Marin', '28-10-88', 'F' ) 
INSERT INTO pacientes VALUES( null, 'Kiki', '02-01-98', 'M' )

NSERT INTO medicos VALUES( null, 'Camus', 'Cardiologista' )

INSERT INTO medicos VALUES( null, 'Saori', 'Clinico Geral' )

INSERT INTO medicos VALUES( null, 'Seiya', 'Clinico Geral' )

-- Agendamentos
INSERT INTO agendamentos VALUES ( null, 1, 1, '2021-12-21 08:28:28' )

INSERT INTO agendamentos VALUES ( null, 2, 3, '2021-11-15 18:58:18' )

INSERT INTO agendamentos VALUES ( null, 3, 2, '2021-11-15 18:58:18' )

-- Consultar agendamentos
-- Query de consulta
SELECT 
    vAgendamentos.id, 
    vAgendamentos.nomeMedico, 
    vAgendamentos.especializacao, 
    vAgendamentos.nomePaciente, 
    strftime('%d/%m/%Y, %H:%M', data) AS data_agendamento 
FROM vAgendamentos 
ORDER BY
    data_agendamento asc