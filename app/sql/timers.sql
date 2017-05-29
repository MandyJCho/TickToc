/* Drop then create schema */
DROP SCHEMA public CASCADE IF EXISTS public;
CREATE SCHEMA public;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;

/* table for timer */
CREATE TABLE timer (
  uuid TEXT PRIMARY KEY NOT NULL ON DELETE CASCADE ON UPDATE CASCADE,
  title TEXT NOT NULL,
  elapsed_time INTEGER NOT NULL,
  start_time INTEGER,
  CHECK (startTime >= 0 AND start_time >= 0)
);