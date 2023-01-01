<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('m_user', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('ユーザー名');
            $table->string('email')->unique()->comment('メールアドレス');
            $table->string('password')->comment('パスワード');
            $table->string('image')->nullable()->comment('プロフィール画像');
            $table->bigInteger('age')->nullable()->comment('年齢');
            $table->integer('sex')->nullable()->comment('性別: 0:男 1:女 2:どちらでもない');
            $table->timestamp('email_verified_at')->nullable()->comment('電子メールアドレスが確認された日時');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
