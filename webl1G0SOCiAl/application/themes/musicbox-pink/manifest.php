<?php
/**
 * SocialEngine
 *
 * @category   Application_Theme
 * @package    Musicbox Theme
 * @copyright  Copyright 2006-2012 Webligo Developments
 * @license    http://www.socialengine.com/license/
 * @version    $Id: manifest.php 9714 2012-05-07 23:17:50
 * @author     
 */

return array(
  'package' => array(
    'type' => 'theme',
    'name' => 'musicbox-pink',
    'version' => '4.2.7',
	'revision' => '$Revision: 9729 $',
    'path' => 'application/themes/musicbox-pink',
    'repository' => '',
    'title' => 'Musicbox Pink',
    'thumb' => 'musicbox_pink.png',
    'author' => 'Webligo Developments',
    'changeLog' => array(     
    ),
    'actions' => array(
      'install',
      'upgrade',
      'refresh',
      'remove',
    ),
    'callback' => array(
      'class' => 'Engine_Package_Installer_Theme',
    ),
    'directories' => array(
      'application/themes/musicbox-pink',
    ),
  ),
  'files' => array(
    'theme.css',
    'constants.css',
  ),
  'nophoto' => array(
    'user' => array(
      'thumb_icon' => 'application/themes/musicbox-pink/images/nophoto_user_thumb_icon.png',
      'thumb_profile' => 'application/themes/musicbox-pink/images/nophoto_user_thumb_profile.png',
    ),
    'group' => array(
      'thumb_normal' => 'application/themes/musicbox-pink/images/nophoto_event_thumb_normal.jpg',
      'thumb_profile' => 'application/themes/musicbox-pink/images/nophoto_event_thumb_profile.jpg',
    ),
    'event' => array(
      'thumb_normal' => 'application/themes/musicbox-pink/images/nophoto_event_thumb_normal.jpg',
      'thumb_profile' => 'application/themes/musicbox-pink/images/nophoto_event_thumb_profile.jpg',
    ),
  ),
) ?>