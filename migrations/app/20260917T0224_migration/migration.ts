#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/acd87359a4504a8b36cddc45bd0ac416c6089c43b2d424d579b017577c3ff5ec/contract';
import endContract from '../../snapshots/acd87359a4504a8b36cddc45bd0ac416c6089c43b2d424d579b017577c3ff5ec/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'transaction',
        columns: [
          col('amount', 'numeric', { notNull: true, codecRef: { codecId: 'pg/numeric@1' } }),
          col('category', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('date', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('description', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('type', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('userId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'transaction_category_check_d85cfdba',
            "\"category\" IN ('Salary', 'Food', 'Transport', 'Shopping', 'Bills', 'Entertainment', 'Health', 'Other')",
          ),
          checkExpression('transaction_type_check_ed5a0d5a', "\"type\" IN ('income', 'expense')"),
        ],
      }),
      this.createIndex({
        schema: 'public',
        table: 'transaction',
        index: 'transaction_userId_idx_a489d58a',
        columns: ['userId'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
