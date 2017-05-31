/* Drop then create schema */
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

/* table for timer */
CREATE TABLE timer (
  uuid TEXT,
  title TEXT NOT NULL,
  elapsed_time INTEGER NOT NULL,
  start_time INTEGER,
  CHECK (elapsed_time >= 0 AND start_time >= 0),
  PRIMARY KEY (uuid)
);