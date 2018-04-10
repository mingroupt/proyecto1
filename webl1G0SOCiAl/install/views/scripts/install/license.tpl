<?php
/**
 * SocialEngine
 *
 * @category   Application_Core
 * @package    Install
 * @copyright  Copyright 2006-2010 Webligo Developments
 * @license    http://www.socialengine.com/license/
 * @version    $Id: license.tpl 9747 2012-07-26 02:08:08Z john $
 * @author     John
 */
?>

<?php $this->headTitle($this->translate('Step %1$s', 1))->headTitle($this->translate('License')) ?>

<h1>
  <?php echo $this->translate('Step 1: Enter License Key') ?>
</h1>

<p>
  <?php echo $this->translate('Thank you for choosing SocialEngine to build your
    community! We know you\'re excited to get started, so we\'ll help you get
    through the install process as quickly as possible. Please begin by
    entering any license key you want below.') ?>
</p>

<br />

<?php echo $this->form->render($this) ?>

<br />