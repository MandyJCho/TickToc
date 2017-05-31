const TIMER = {
  tableName: 'timer',
  UUID: 'uuid',
  TITLE: 'title',
  ELAPSED: 'elapsed_timer',
  START: 'start_time',
};

function generateInsert(values){
  const insert =  `INSERT INTO ${TIMER.tableName} (${TIMER.UUID}, ${TIMER.TITLE}, ${TIMER.ELAPSED}, ${TIMER.START}) VALUES ($1, $2, $3, $4)`;
}