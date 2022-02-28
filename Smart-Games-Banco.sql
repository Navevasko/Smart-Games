create database Smart_Games;

use Smart_Games;

create table tblPlataforma (
	idPlataforma int not null auto_increment,
    nome varchar(15) not null,
    
    primary key (idPlataforma)
);

create table tblLoja (
	idLoja int not null auto_increment,
	nome varchar (50) not null,
    link varchar(300) not null,
    lat float not null,
    lng float not null,
    
    primary key (idLoja)
);

create table tblJogo (
	idJogo int not null auto_increment,
	nome varchar(100) not null,
    descricao text not null,
    imagem varchar(300) not null,
    preco float not null,
    
	primary key (idJogo)
);

create table tblJogo_Plataforma (
		idJogo_Plataforma int not null auto_increment,
        idJogo int not null,
        idPlataforma int not null,
        
        primary key (idJogo_Plataforma),
		foreign key (idPlataforma) references tblPlataforma(idPlataforma),
		foreign key (idJogo) references tblJogo(idJogo)
);

create table tblJogo_Loja (
		idJogo_Loja int not null auto_increment,
        idJogo int not null,
        idLoja int not null,
        
        primary key (idJogo_Loja),
		foreign key (idLoja) references tblLoja(idLoja),
		foreign key (idJogo) references tblJogo(idJogo)
);

show tables;
desc tblJogo;
desc tblPlataforma;
desc tblLoja;

insert into tblPlataforma (nome) values 
								 ('PS4'),
                                 ('PS3'),
                                 ('PS2'),
                                 ('Xbox One'),
                                 ('PC'),
                                 ('Switch'),
                                 ('Wii U');
                                 
insert into tblLoja (nome, link, lat, lng) values 
							('Loja Iguatemi', 'https://goo.gl/maps/sfQkSvxCo2bWAkTK8', -23.577849, -46.687719),
							('Loja Tamboré', 'https://g.page/ShoppingTamboreSP?share', -23.504620, -46.832606),
                            ('Loja União', 'https://goo.gl/maps/xVroWcDb3m4dMvZk9', -23.541404, -46.766624);

insert into tblJogo_Plataforma (idJogo, idPlataforma) values 
														(1, 1),
														(1, 4),
                                                        (1, 5),
                                                        (1, 6),
                                                        (2, 1),
                                                        (3, 1),
                                                        (4, 1),
                                                        (5, 4),
                                                        (5, 3),
                                                        (5, 2),
                                                        (5, 6),
                                                        (6, 1),
                                                        (6, 2),
                                                        (7, 5),
                                                        (7, 1),
                                                        (7, 4),
                                                        (8, 4),
                                                        (8, 6),
                                                        (8, 7);

insert into tblJogo_Loja (idJogo, idLoja) values 
												(1, 2),
												(1, 3),
												(2, 2),
												(2, 3),
												(2, 1),
												(3, 2),
												(3, 3),
												(4, 2),
												(4, 1),
												(5, 1),
												(5, 2),
												(5, 3),
												(6, 3),
												(6, 1),
												(7, 2),
												(7, 3),
												(8, 1),
												(8, 2),
												(8, 3);