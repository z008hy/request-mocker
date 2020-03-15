USE rm_db;

CREATE TABLE IF NOT EXISTS request (
  id bigint(11) NOT NULL AUTO_INCREMENT, 
  note varchar(1000) NOT NULL COMMENT '',
  create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  update_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  name varchar(60) NOT NULL COMMENT '',
  type varchar(10) NOT NULL COMMENT '',
  url varchar(255) NOT NULL COMMENT 'url',
  params varchar(1000) NOT NULL COMMENT 'params',
  headers varchar(1000) NOT NULL COMMENT 'headers',
  mocker varchar(1000) NOT NULL COMMENT 'mock ',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='request';