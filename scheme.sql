CREATE TABLE arts(
	title VARCHAR(20) NOT NULL,
	filename VARCHAR(64) NOT NULL,
	caption VARCHAR(500) NOT NULL,
	PRIMARY KEY(title)
);

CREATE TABLE designs(
	title VARCHAR(20) NOT NULL,
	filename VARCHAR(64) NOT NULL,
	caption VARCHAR(500) NOT NULL,
	PRIMARY KEY(title)
);

CREATE TABLE projects(
	title VARCHAR(20) NOT NULL,
	filename VARCHAR(64) NOT NULL,
	caption VARCHAR(500) NOT NULL,
	PRIMARY KEY(title)
);
