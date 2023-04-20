<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'cinema' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?Za)Lq0^U%+!(e)>xD_7)Ez&z8MM1!VKDC)%P!Gp.MOMBBh^R(R/#CncGH(9w1gf' );
define( 'SECURE_AUTH_KEY',  '$&Jn~gdFCwmSx,oNeHcd}$,jZg%n~>=1Lls:jTwm 2{#>Wp=O6:C^l;UY0F>$o8Q' );
define( 'LOGGED_IN_KEY',    '3CC4g(PHawE/|-%7uG[p_.ZQC=HpoFg2b=jS.O~iZx{w{F}yHtAj+:?Oi2B0VeTS' );
define( 'NONCE_KEY',        'PB)|(FMk>C6GC`Td>`Qfj^dDiSHwkl?{+, uRW~Fs2DIU=B%,9`(<|D=eX*kkee6' );
define( 'AUTH_SALT',        'iw8tfsl)A#ZLW bPWn9x.P{-K.S^fgI-Z_K&.0E`5_kpN7*[7``s~bT0*zX1&!L1' );
define( 'SECURE_AUTH_SALT', 'T;/8`ws38!#[%+NscO~UH6LK=~AZuL9DBt)RC$}9Ba3S^JJ]I9N7/txnl;;0zi&V' );
define( 'LOGGED_IN_SALT',   'uC$:rxRI,uTC?tD!QL.TCYSkB}3M66;Pb[0-AeWd_2~Uc!65Me}60l8ELry8t3h6' );
define( 'NONCE_SALT',       'mzw[Y}euoC[70!DRW:Pm8(KGF=|;|Tcf:0h*e}&oD_vM4yue{29iX$2C&hc9H&zM' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
