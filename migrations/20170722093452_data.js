
exports.up = function(knex, Promise) {
  return knex.schema.createTable('data', table => {
    table.increments();
    table.text('cmte_nm');
    table.text('cmte_tp');
    table.text('cmte_pty');
    table.text('cand_name');
    table.text('cand_pty_affiliation');
    table.text('cand_office_st');
    table.text('cleanded_name');
    table.text('city');
    table.text('state');
    table.text('zip_code');
    table.text('employer');
    table.text('cleanedoccupation');
    table.text('classification');
    table.text('transaction_dt');
    table.text('cycle');
    table.text('transaction_amt');
    table.text('cur_dollars');
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('data');
};
